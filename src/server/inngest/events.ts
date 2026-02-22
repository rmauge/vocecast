export interface ReminderScheduledEvent {
  name: "vocecast/reminder.scheduled";
  data: {
    reminderId: string;
    orgId: string;
  };
}

export type VocecastEvents = ReminderScheduledEvent;
