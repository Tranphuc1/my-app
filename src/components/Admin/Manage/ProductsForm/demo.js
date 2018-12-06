import React, { Component } from 'react';

class demo extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render() {
        return (
            <form >
            <label>
              Pick your favorite flavor:
              <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
          </form>
        );
    }
}

export default demo;