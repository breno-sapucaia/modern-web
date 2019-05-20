import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
<div>
    <Pai nome="Paulo" sobrenome="Silva">
        <Filho nome="Pedro" sobrenome="Silva"/>
        <Filho nome="Paulo" sobrenome="Silva"/>
        <Filho nome="Carla" sobrenome="Silva"/>
    </Pai>
</div>

, document.getElementById('root'));