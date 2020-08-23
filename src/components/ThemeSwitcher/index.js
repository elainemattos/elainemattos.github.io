import React from 'react'

const lightish = <div>ON</div>
const darkish = <div> OFF</div>

const ThemeSwitcher = ({ theme }) => (theme ? darkish : lightish)

export default ThemeSwitcher
