import { calculatorSubject } from '../observables/calculatorObservable'
import labels from '../utils/labels'

const labelsMap = new Map(labels.map(label => [`btn-${label.value}`, label]))

export const keyboardObserver = code => {
  const id = `btn-${code}`
  const { value, label, name } = labelsMap.get(id)
  const button = document.getElementById(id)

  button.classList.add(button.dataset.class)
  calculatorSubject.next({ value, label, type: name })

  const timeout = setTimeout(() => {
    button.classList.remove(button.dataset.class)
    clearTimeout(timeout)
  }, 100)
}
