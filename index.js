const Command = require('command')

module.exports = function UnlimitedFlight(dispatch) {
	
    let enabled = false,
		energy = 0
	
	dispatch.hook('S_CANT_FLY_ANYMORE', 1, (event) => {
		if(enabled) return false
    })
	
	dispatch.hook('S_PLAYER_CHANGE_FLIGHT_ENERGY', 1, event => { 
		energy = event.energy
	})
	
	dispatch.hook('C_PLAYER_FLYING_LOCATION', 3, event => { // Thanks to Pinkie Pie
		if(energy == 0 && event.type !== 7 && event.type !== 8) {
			event.type = 7
			return true
		}
	})
	
	// ################# //
	// ### Chat Hook ### //
	// ################# //
	
	const command = Command(dispatch)
	command.add('fly', () => {
		enabled = !enabled
		command.message('[Unlimited Flight] ' + (enabled ? '<font color="#56B4E9">enabled</font>' : '<font color="#E69F00">disabled</font>'))
		console.log('[Unlimited Flight] ' + (enabled ? 'enabled' : 'disabled'))
	})
}