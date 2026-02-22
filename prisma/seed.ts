import { PrismaClient, UserRole } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Create a default organization
  const org = await prisma.organization.upsert({
    where: { email: "admin@vocecast.dev" },
    update: {},
    create: {
      name: "Vocecast Dev",
      email: "admin@vocecast.dev",
    },
  });

  console.log(`Created organization: ${org.name} (${org.id})`);

  // Create an admin user (password-based account will be created via Better Auth)
  const admin = await prisma.user.upsert({
    where: { email: "admin@vocecast.dev" },
    update: {},
    create: {
      name: "Admin User",
      email: "admin@vocecast.dev",
      emailVerified: true,
      role: UserRole.ADMIN,
      orgId: org.id,
    },
  });

  console.log(`Created admin user: ${admin.name} (${admin.id})`);

  // Create sample clients
  const client1 = await prisma.client.upsert({
    where: { email_orgId: { email: "john@example.com", orgId: org.id } },
    update: {},
    create: {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phoneNumber: "+15551234567",
      orgId: org.id,
      authorId: admin.id,
    },
  });

  const client2 = await prisma.client.upsert({
    where: { email_orgId: { email: "jane@example.com", orgId: org.id } },
    update: {},
    create: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      phoneNumber: "+15559876543",
      orgId: org.id,
      authorId: admin.id,
    },
  });

  console.log(`Created clients: ${client1.firstName}, ${client2.firstName}`);

  // Create a sample template
  const template = await prisma.template.upsert({
    where: { id: "seed-template-1" },
    update: {},
    create: {
      id: "seed-template-1",
      name: "Appointment Reminder",
      content:
        "Hi {{client.preferredName}}, this is a reminder about your appointment on {{day_time appointmentTime}}. Please call us if you need to reschedule.",
      orgId: org.id,
      authorId: admin.id,
    },
  });

  console.log(`Created template: ${template.name}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
