import React, { Component } from "react";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = { jawaban: [] };
  }
  terimaHandler = (event) => {
    if (event.target.checked) {
      this.addCheckedJawaban(event.target.value);
    } else this.uncheckedJawaban(event.target.value);
  };
  addCheckedJawaban = (nilaiJawaban) => {
    let jawab = this.state.jawaban;
    jawab.push(nilaiJawaban);
    this.setState({ jawaban: jawab });

    this.addScore(jawab);
  };
  uncheckedJawaban = (nilaiJawaban) => {
    let jawab = this.state.jawaban.filter((value) => {
      return value !== nilaiJawaban;
    });
    this.setState({ jawaban: jawab });

    this.addScore(jawab);
  };

  addScore = (nilaiJawaban) => {
    let jawabanSoal = this.state.jawaban.filter((value) => {
      return value.soal_no !== nilaiJawaban.soal_no;
    });

    this.props.funcJawab({
      soal_no: this.props.no,
      jawaban: nilaiJawaban,
    });
  };

  render() {
    return (
      <div>
        <label>
          {this.props.no} . {this.props.data.soal}
        </label>
        {this.props.data.option.map((options) => {
          return (
            <div className="form-check">
              <input
                className="form-check-input"
                onChange={this.terimaHandler}
                type="checkbox"
                name={"soal" + this.props.no}
                value={options}
                id={"soal" + this.props.no}
              ></input>
              <label
                className="form-check-label"
                htmlFor={"soal" + this.props.no}
              >
                {options}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CheckBox;
