The application relies on several third party providers.
Services include
* Voice and SMS: Perform reminders such as making calls and sending messages
* Object storage: Save cloned voice messages and voice sample recordings
* Payments
* Authentication


## Database
The main database is an SQL RDBMS for ACID.
It should be designed to represent a multitenant schema. This means that most data should have a foreign key to an Organization (belongs to an organzation). Most tables should be designed that way. 

Prisma will be used to manage the database layer

## Third party providers
Some of the third party features may work on a bring your own API KEY model.

The system should be designed so that the third party providers are abstracted enough that they can be switched with minimal difficulty.

There should be service layer for each service and then a concreate implementation for a specific provider.

If the third party api supports tagging they should tagged with the organization ID so that we can attribute its usage.

The third party provider information should also be saved in the system for attribution.

## Internal components communication

Service interfaces should prefer communication between the front end and backend to use trpc. This gives use type safety and decouples from Next JS Server Actions.

## Backend

The backend will be design in a API first model.
APIs will be cleanly separated for each service and composed as needed for complex flows in the business layer.
Async will be prefered for calls. Sync should be used where it makes sense.

With multiple third party services failures can occur leading to inconsistency. A transaction outbox service based on a database table should be used to keep track of the state in these cases. And used to drive the transaction to complete or rollback.

## Middleware

Middle ware should make sure that users are authenticated before they reach non public routes. If not they should be re-directed to login and then back to where the original request. 

For a post request this will not work.

If a user session times out and they send a post request then a login popup should be used so they they don't lose saved work and can retry the post request.

## Front end
The frond end will try to reuse as much functionality and UI elements as possible. 

Logged in session status should flow through all routes and components.

It will use a mature library for forms ex Tanstack Forms. List and detail, create and edit pages should look similar and reduce copy and pasting.

It should use a great component for recording voice in the browser then sending it to the voice clone provider.

## Object Storage

S3-compatible object storage is used for audio files (voice samples, generated messages).

### Storage Key Format

Files are stored at: `{orgId}/{userId}/{yyyy}/{mm}/{dd}/{uuid}.{ext}`

This organizes files by tenant, user, and date for easy browsing and lifecycle management.

### MinIO for Local Development

In development, MinIO provides an S3-compatible API locally. Run `docker compose up -d` to start it:
- **S3 API**: `http://localhost:9000`
- **Console UI**: `http://localhost:9001` (minioadmin/minioadmin)
- The `vocecast` bucket is auto-created on first start

The `AWS_ENDPOINT` env var tells the S3 client to use MinIO instead of AWS. In production, omit this variable to use standard AWS S3.

### Environment Variables

```
AWS_REGION="us-east-1"
AWS_S3_BUCKET="vocecast"
AWS_ENDPOINT="http://localhost:9000"       # MinIO; omit for AWS
AWS_ACCESS_KEY_ID="minioadmin"
AWS_SECRET_ACCESS_KEY="minioadmin"
```

### Voice Sample Upload Flow

1. Browser records audio via MediaRecorder API
2. Audio is sent as `multipart/form-data` to `POST /api/upload/voice-sample`
3. API route authenticates, validates file (max 10MB, wav/webm), uploads to S3
4. A `VoiceSample` DB record is created with the `storageKey`
5. Playback URLs are generated on demand via presigned URLs (tRPC `voiceSample.getPlaybackUrl`)
