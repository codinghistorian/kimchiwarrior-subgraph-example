import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { EventA } from "../generated/ContractA/ContractA"

export function createEventAEvent(
  _value: BigInt,
  _address: Address,
  _flag: boolean
): EventA {
  let eventAEvent = changetype<EventA>(newMockEvent())

  eventAEvent.parameters = new Array()

  eventAEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )
  eventAEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  eventAEvent.parameters.push(
    new ethereum.EventParam("_flag", ethereum.Value.fromBoolean(_flag))
  )

  return eventAEvent
}
