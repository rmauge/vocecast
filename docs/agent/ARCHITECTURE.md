The application relies on several third party providers.
Services include
* Voice and SMS: Perform reminders such as making calls and sending messages
* Object storage: Saved cloned voice messages 
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


