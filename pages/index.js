import React, { Component } from 'react'
import Head from 'next/head'

//images
// import Barcos from '../public/img/barcos.png'
// import Putas from './public/img/putas.png'
// import Coco from './public/img/cocaine.png'
// import Lambo from './public/img/lambo.png'
// import Mansiones from './public/img/mansiones.png'
// import Iphone from './public/img/iphone12.png'
// import AK from './public/img/AK.png'
// import rolex from './public/img/ROLEX.png'
// import jordan from './public/img/jordan.png'

import Image from 'next/image'

const mockItems = [
    { name: 'Iphone 12', cost: 869900, image: '/img/iphone12.png' },
    { name: 'Escorts', cost: 80000, image: '/img/putas.png' },
    { name: 'Kgs. de coco', cost: 1551400, image: '/img/cocaine.png' },
    { name: 'Lambos', cost: 155140000, image: 'img/lambo.png' },
    { name: 'Mansiones', cost: 775700000, image: '/img/mansiones.png' },
    { name: 'AK-47', cost: 2053800, image: '/img/AK.png' },
    { name: 'Barcos', cost: 14670000, image: '/img/barcos.png' },
    { name: 'Rolex', cost: 14670000, image: '/img/ROLEX.png' },
    { name: 'Air Jordan', cost: 154900, image: '/img/jordan.png' },
]



export default class Home extends Component {




    constructor(props) {
        super(props);


        this.state = {
            item: mockItems[0],
            money: 0,
            localMoneyString: '0',
            quantity: 0,
            result: 0
        };
    }






    handleItemChange = (e) => {
        this.setState({ item: mockItems[e.target.selectedIndex] }, function () {
            this.calculate()
        })

    }

    handleMoneyChange = (e) => {
        let valor = Number(e.target.value.replace(/\D/g, ''));

        // console.log(valor)
        if (valor >= 0 && valor < 999999999999999999) {
            this.setState({ money: parseInt(valor), localMoneyString: parseInt(valor).toLocaleString('es-CL') }, function () {
                this.calculate()
            });

        }

        valor = 0

    }



    calculate = () => {


        let res = Math.floor((Math.trunc(this.state.money)) / (this.state.item.cost)) || 0
        this.setState({ result: res })
        // console.log(this.state.item.cost)
        // console.log(this.state.money)

    }





    render() {


        return (


            <React.Fragment>
                <head>
                    <title>
                        Que puedo comprar con
                    </title>
                    <meta name="description" content="Que puedo comprar con pesos" />

                </head>




                {/* <div className="background-image">    </div> */}

                <div className="background-image">

                    <main className="grid">



                        <aside className="sides"></aside>

                        <div className="main">
                            <div className="header"></div>
                            <div className="center form-group">
                                <div className="text1">
                                    <label htmlFor="producto">
                                        <h1>¿CUANTO$</h1>

                                    </label>
                                </div>
                                <div className="text2">
                                    <select id="producto" onChange={this.handleItemChange} value={this.state.selectValue} className="form-control selector" >
                                        {mockItems.map((item) => (
                                            <option key={item.name} data-item={item} >{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="text3">
                                    <label htmlFor="cantidad">
                                        <h1 className="h3">PUEDO COMPRAR CON</h1>
                                    </label>
                                </div>
                                <div className="text4">
                                    <label htmlFor="divisa" className="divisa-label" > <h1 className="divisa-label"> $</h1> </label>
                                    <input id="cantidad" type="text" value={(this.state.money.toLocaleString('es-CL'))} onChange={this.handleMoneyChange} className="form-control amount" placeholder="Enter the plaplipla"></input>
                                    <select id="divisa" className="divisa" >
                                        <option value="CLP">CLP</option>
                                    </select>

                                </div>


                                <div className="result">
                                    <div className="result-number">
                                        <h1>  {this.state.result.toLocaleString('es-CL')}  </h1>
                                    </div>
                                    <div className="result-image">
                                        <img alt="item" className="product" src={this.state.item.image} />
                                    </div>

                                </div>




                            </div>


                        </div>


                        <aside className="sides"></aside>


                    </main>



                </div>



            </React.Fragment >

        )

    }
}