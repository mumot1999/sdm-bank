export type PaymentType = 'transfer' | 'payment' | 'interestRateCharge';
export type Payment = { type: PaymentType; receiver: string; amount: number };

export interface PaymentHandler {
  handle(p: Payment): void;
  successor: {handle: (p: Payment) => void};
}

export class PaymentHandlerDecorator implements PaymentHandler {
  constructor(public successor: {handle: (p: Payment) => void}, private handler: (p: Payment) => void) {}


  handle(p: Payment) {
    this.handler(p);
    this.successor.handle(p);
  }
}

export function buildChain(handlers: {handle: (p: Payment) => void}[]){
    return handlers.reduceRight((p, c) => { 
        return new PaymentHandlerDecorator(c, p.handle)
    })
}