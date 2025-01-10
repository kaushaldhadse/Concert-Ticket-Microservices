import {natsWrapper} from "../../../nats-wrapper";
import {OrderCreatedListener} from "../order-created-listener";
import {Ticket} from "../../../models/ticket";
import {OrderCreatedEvent, OrderStatus} from "@souvik150/tickets-common";
import mongoose from "mongoose";

const setup = async () => {
    // Create an instance of the listener
    const listener = new OrderCreatedListener(natsWrapper.client);

    // Create a fake data event
    const ticket = Ticket.build({
        title: 'concert',
        price: 99,
        userId: 'asdf'
    });
    await ticket.save();

    // Create a fake message object
    const data: OrderCreatedEvent['data'] = {
        id: new mongoose.Types.ObjectId().toHexString(),
        version: 0,
        status: OrderStatus.Created,
        userId: 'alskdfj',
        expiresAt: 'alskdfj',
        ticket: {
            id: ticket.id,
            price: ticket.price
        }
    }

    // return all of this stuff
    const msg: any = {
        ack: jest.fn()
    }

    return {listener, ticket, data, msg};
}

it('sets the userId of the ticket', async () => {
    const {listener, ticket, data, msg} = await setup();

    await listener.onMessage(data, msg);

    const updatedTicket = await Ticket.findById(ticket.id);

    expect(updatedTicket!.orderId).toEqual(data.id);
});

it('acks the message', async () => {
    const {listener, ticket, data, msg} = await setup();

    await listener.onMessage(data, msg);

    expect(msg.ack).toHaveBeenCalled();
});

it('publishes a ticket updated event', async () => {
    const {listener, ticket, data, msg} = await setup();

    await listener.onMessage(data, msg);

    expect(natsWrapper.client.publish).toHaveBeenCalled();
});