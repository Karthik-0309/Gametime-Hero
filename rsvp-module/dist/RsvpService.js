"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RsvpService = void 0;
class RsvpService {
    constructor(logger) {
        this.logger = logger;
        this.entries = new Map();
    }
    addOrUpdate(player, status) {
        const entry = { player, status };
        this.entries.set(player.id, entry);
        this.logger.log(`RSVP for ${player.name} set to ${status}`);
    }
    getConfirmedAttendees() {
        return [...this.entries.values()]
            .filter(entry => entry.status === "Yes")
            .map(entry => entry.player);
    }
    getRsvpCounts() {
        let confirmed = 0;
        let declined = 0;
        for (const { status } of this.entries.values()) {
            if (status === "Yes")
                confirmed++;
            else if (status === "No")
                declined++;
        }
        return {
            total: this.entries.size,
            confirmed,
            declined
        };
    }
}
exports.RsvpService = RsvpService;
