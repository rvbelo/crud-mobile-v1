import React, {useState} from 'react';
import InputChange from './function';

export default function CadastroCelular() {
  const[celulares, Setcelulares] = useState({})
  const[celular, setCelular] = useState({
        "celular": [
        {
          "code": 1,
          "model": "",
          "brand": "",
          "price": 36,
          "color": "",
          "startDate": "",
          "endDate": ""
        }]})

function handleSubmit(event) {
event.preventDefault()
setCelular([celular])
}

function addCelular (event){
setCelular({
...celular,
[event.target.value]: event.target.value
})
}

<form onSubmit={event => handleSubmit(event)}>
          <InputChange
            name="code"
            placeholder="Código da Pessoa"
            onChange={event => addCelular(event)}
          />
          <InputChange
            name="model"
            placeholder="Peso da Pessoa"
            onChange={event => addCelular(event)}
          />
          <InputChange
            name="price"
            placeholder="Estado da Pessoa"
            onChange={event => addCelular(event)}
          />
          <InputChange
            name="brand"
            placeholder="Estado da Pessoa"
            onChange={event => addCelular(event)}
          />
          <InputChange
            name="color"
            placeholder="Estado da Pessoa"
            onChange={event => addCelular(event)}
          />
          <InputChange
            name="startDate"
            placeholder="Estado da Pessoa"
            onChange={event => addCelular(event)}
          />
          <InputChange
            name="endDate	"
            placeholder="Estado da Pessoa"
            onChange={event => addCelular(event)}
          />
          <button type="submit">Adicionar Celular</button>
        </form>
        {celular.map(celular => (
          <div>
            <h1>{celular.code}</h1>
            <h1>{celular.model}</h1>
            <h1>{celular.price}</h1>
            <h1>{celular.brand}</h1>
            <h1>{celular.color}</h1>
            <hr />
          </div>
        ))}}