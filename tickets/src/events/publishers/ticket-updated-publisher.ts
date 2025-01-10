import { Publisher, Subjects, TicketUpdatedEvent } from '@souvik150/tickets-common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}