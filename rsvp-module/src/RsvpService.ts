import { Player, RsvpEntry, RsvpStatus } from "./types";
import { Logger } from "./Logger";

export class RsvpService {
  private entries = new Map<string, RsvpEntry>();

  constructor(private logger: Logger) {}

  addOrUpdate(player: Player, status: RsvpStatus): void {
    const entry: RsvpEntry = { player, status };
    this.entries.set(player.id, entry);
    this.logger.log(`RSVP for ${player.name} set to ${status}`);
  }

  getConfirmedAttendees(): Player[] {
    return [...this.entries.values()]
      .filter(entry => entry.status === "Yes")
      .map(entry => entry.player);
  }

  getRsvpCounts(): { total: number; confirmed: number; declined: number } {
    let confirmed = 0;
    let declined = 0;

    for (const { status } of this.entries.values()) {
      if (status === "Yes") confirmed++;
      else if (status === "No") declined++;
    }

    return {
      total: this.entries.size,
      confirmed,
      declined
    };
  }
}
