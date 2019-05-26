import "./Main.css"
import React from 'react'
import Header from './Header'

export default props =>
<React.Fragment>
{/* ao fazer {...props no HEADER, ele acaba herdando as propriedades declaradas lá no app.jsx do MAIN} */}
        <Header {...props}/>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>