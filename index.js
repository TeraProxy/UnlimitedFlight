module.exports = function UnlimitedFlight(dispatch) {
	
    let enabled = false,
		cid = null,
		player = ''
	
	dispatch.hook('S_CANT_FLY_ANYMORE', 1, (event) => {
		if(enabled) return false
    })
	
	dispatch.hook('S_LOGIN', 1, event => { 
		({cid} = event) 
		player = event.name
	})
	
	// ################# //
	// ### Chat Hook ### //
	// ################# //
	
	dispatch.hook('C_WHISPER', 1, (event) => {
		if(event.target.toUpperCase() === "!unlimitedflight".toUpperCase()) {
			if (/^<FONT>on?<\/FONT>$/i.test(event.message)) { 
				enabled = true
				message('Unlimited Flight <font color="#56B4E9">enabled</font>.')
			}
			else if (/^<FONT>off?<\/FONT>$/i.test(event.message)) {
				enabled = false
				message('Unlimited Flight <font color="#E69F00">disabled</font>.')
			}
			else message('Commands:<br>'
								+ ' "on" (enable Unlimited Flight),<br>'
								+ ' "off" (disable Unlimited Flight)'
						)
			return false
		}
	})
	
	function message(msg) {
		dispatch.toClient('S_WHISPER', 1, {
			player: cid,
			unk1: 0,
			gm: 0,
			unk2: 0,
			author: '!UnlimitedFlight',
			recipient: player,
			message: msg
		})
	}
	
	dispatch.hook('C_CHAT', 1, event => {
		if(/^<FONT>!fly<\/FONT>$/i.test(event.message)) {
			if(!enabled) {
				enabled = true
				message('Unlimited Flight <font color="#56B4E9">enabled</font>.')
				console.log('Unlimited Flight enabled.')
			}
			else {
				enabled = false
				message('Unlimited Flight <font color="#E69F00">disabled</font>.')
				console.log('Unlimited Flight disabled.')
			}
			return false
		}
	})
}