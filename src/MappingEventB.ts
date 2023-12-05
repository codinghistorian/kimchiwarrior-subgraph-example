// importing events
import { EventB } from '../generated/ContractB/ContractB'
//importing entity
import { EventBEntity } from '../generated/schema'

export function handleEventB(event: EventB): void {
  let eventBEntity = new EventBEntity(event.params._value.toHex())
  eventBEntity.id = event.params._value.toHex()
  eventBEntity.address = event.params._address
  eventBEntity.flag = event.params._flag
  eventBEntity.save()
}
