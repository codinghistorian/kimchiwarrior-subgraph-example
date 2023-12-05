// importing events
import { EventA } from '../generated/ContractA/ContractA'
//importing entity
import { EventAEntity } from '../generated/schema'

export function handleEventA(event: EventA): void {
  let eventAEntity = new EventAEntity(event.params._value.toHex())
  eventAEntity.id = event.params._value.toHex()
  eventAEntity.address = event.params._address
  eventAEntity.flag = event.params._flag
  eventAEntity.save()
}
