import React, { Component } from "react";
import { data } from "./model/Model";
import Essay from "./Component/Essay";
import RadioBox from "./Component/RadioBox";
import CheckBox from "./Component/CheckBox";
import ResultNilai from "./Component/ResultNilai";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { jawabanSoal: [], score: 0, hasilJawaban: [] };
  }

  addJawaban = (jawaban) => {
    let newJawaban = this.state.jawabanSoal.filter((value) => {
      return value.soal_no === jawaban.soal_no;
    });
    newJawaban.push(jawaban);

    let hasilJawabansoal = this.kalkulasiNilai(newJawaban);
    hasilJawabansoal.sort((a, b) => a.soal_no - b.soal_no);

    this.setState({ jawabanSoal: newJawaban, hasilJawaban: hasilJawabansoal });
  };

  kalkulasiNilai = (jawaban) => {
    let tempHasil = [];
    let BooleanJawab = [];
    jawaban.map((jawab) => {
      switch (data[jawab.soal_no - 1].type) {
        case "radio":
        case "essay":
          if (jawab.jawaban === data[jawab.soal_no - 1].kunci) {
            BooleanJawab = "Benar";
          } else {
            BooleanJawab = "Salah";
          }
          break;

        case "checkbox":
          if (
            this.equalsIgnoreOrder(jawab.jawaban, data[jawab.soal_no - 1].kunci)
          ) {
            BooleanJawab = "Benar";
          } else {
            BooleanJawab = "salah";
          }
          break;
      }
      tempHasil.push({
        Soal: jawab.soal_no,
        hasil: BooleanJawab,
      });
      BooleanJawab = "";
      console.log(tempHasil);
    });
    return tempHasil;
  };

  equalsIgnoreOrder = (a, b) => {
    if (a.length !== b.length) return false;
    const uniqueValues = new Set([...a, ...b]);
    for (const v of uniqueValues) {
      const aCount = a.filter((e) => e === v).length;
      const bCount = b.filter((e) => e === v).length;
      if (aCount !== bCount) return false;
    }
    return true;
  };
  submitSoal = () => {};

  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
                width="30"
                height="24"
                class="d-inline-block align-top"
              />
              Bootstrap
            </a>

            <ul class="nav justify-content-end">
              <li class="nav-item bg-dark">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Create Quiz
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Attempt Quiz
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <form>
                {data.map((nilai, i) => {
                  if (nilai.type === "essay") {
                    return (
                      <Essay
                        data={nilai}
                        no={i + 1}
                        key={i}
                        funcJawab={this.addJawaban}
                      />
                    );
                  } else if (nilai.type === "radio") {
                    return (
                      <RadioBox
                        data={nilai}
                        no={i + 1}
                        key={i}
                        funcJawab={this.addJawaban}
                      />
                    );
                  } else if (nilai.type === "checkbox") {
                    return (
                      <CheckBox
                        data={nilai}
                        no={i + 1}
                        key={i}
                        funcJawab={this.addJawaban}
                      />
                    );
                  }
                })}
                <button
                  type="submit"
                  className="btn btn-submit"
                  onChange={this.submitSoal}
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="col-sm">
              <div className="sticky-top">
                <label>Hasil nya :</label> <br></br>
                <ResultNilai jawaban={this.state.hasilJawaban} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
