class Spaceship {
  constructor(name, crew, phasers, shields, phasersCharge='uncharged', cloaked=false, warpDrive='disengaged'){
    this.name = name,
    this.crew = crew,
    this.phasers = phasers,
    this.phasersCharge = phasersCharge,
    this.shields = shields,
    this.cloaked = cloaked,
    this.warpDrive = warpDrive,
    this.docked = this.crew.length === 0 ? true : false
    this.setCrewShip(this)
  }

  setCrewShip(ship) {
    this.crew.forEach(function(member){
      member.currentShip = ship
    })
  }


}
// name, crew(array), phasers=uncharged, shields, cloaked=false, warpDrive=disengaged, docked
// if crew = [], docked=true