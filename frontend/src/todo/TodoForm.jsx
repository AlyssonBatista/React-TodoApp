import React from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

export default props => {
  return (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input className="form-control" id="description" 
            placeholder='Adicione uma tarefa' 
            onChange={props.handleChange}
            value={props.description}></input>

        </Grid>

        <Grid cols='12 3 2'>
           <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>

        </Grid>
       
    </div>
  )
}

 
