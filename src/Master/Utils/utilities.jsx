export const JobKeys = {
  GITHUB: "github",
  RISKSENSE: "risksense",
  FRII: 'frii',
  COOLFIRE: 'coolfire'
}

// TODO Tests
export const isButtonOpen = (buttons, key) => { return buttons.find(x => x.key === key).isOpen }
