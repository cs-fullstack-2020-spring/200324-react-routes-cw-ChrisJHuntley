import React, { Component } from 'react'


class AddCharacter extends Component {
    constructor(props) {
        super(props);
        // variable names should start with a lower case letter
        this.state = {
            charcterName: '', // character is spelled wrong (not a big deal)
            Year: '',
            Gender: ''

        }
    }
    // format your file using ctr + shift + i
    handleChange = (event) => {
        if (event.target.name === "characterNames") {
            this.setState({ charcterName: event.target.value })
        } else if (event.target.name === "Year") {
            this.setState({ Year: event.target.value })
        } else if (event.target.name === "Gender") {
            this.setState({ Gender: event.target.value })


        }
    }
    handleSubmission = (event) => {
        event.preventDefault();
        this.setState({
            charcterName: "",
            Year: 0,
            Gender: "",

        })

    }
    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Add character</legend>

                        <div className="formGroup">
                            <label htmlFor="characterName">Characters Name : </label>
                            <input type="text" name="characterName" id="Name"
                                value={this.state.charcterName} onChange={this.handleChange} />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="Year">Year : </label>
                            <input type="date" name="Year" id="Year"
                                value={this.state.Year} onChange={this.handleChange} />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="Gender"> : </label>
                            <input type="text" name="Gender" id="Gender"
                                value={this.state.Gender} onChange={this.handleChange} />
                        </div>



                        <button onClick={this.handleSubmission}>Submit</button>

                    </fieldset>
                </form>
                <div>
                    {/* saving form submission to an array an iterating through the array OR using conditional rendering would keep you from having this text always display in the browser */}
                    {`Character Name: ${this.state.charcterName}
                 Year: ${this.state.Year}
                 Gender: ${this.state.Gender}`}

                </div>

            </div>
        )
    }

}
export default AddCharacter