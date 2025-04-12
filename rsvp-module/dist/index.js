"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RsvpService_1 = require("./RsvpService");
const Logger_1 = require("./Logger");
// Create a logger and an instance of the RSVP service
const logger = new Logger_1.Logger();
const rsvpService = new RsvpService_1.RsvpService(logger);
// Registering player RSVPs
rsvpService.addOrUpdate({ id: "1", name: "Aarav" }, "Yes");
rsvpService.addOrUpdate({ id: "2", name: "Isha" }, "No");
rsvpService.addOrUpdate({ id: "3", name: "Rohan" }, "Maybe");
rsvpService.addOrUpdate({ id: "4", name: "Divya" }, "Yes");
rsvpService.addOrUpdate({ id: "5", name: "Kunal" }, "No");
rsvpService.addOrUpdate({ id: "6", name: "Meera" }, "Yes");
// Simulate someone updating their RSVP
rsvpService.addOrUpdate({ id: "2", name: "Bob" }, "Maybe"); // Bob changed his mind
// Show confirmed attendees
console.log("\n✅ Confirmed Attendees:");
console.log(rsvpService.getConfirmedAttendees());
// Show RSVP summary
console.log("\n📊 RSVP Summary:");
console.log(rsvpService.getRsvpCounts());
