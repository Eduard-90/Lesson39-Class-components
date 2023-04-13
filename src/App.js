import React, { Component } from "react";
import Article from "./components/Article";
import LangContext from "./components/lang-context";

let EN = {
  title: "NVIDIA news",
  title_description: "NVIDIA Accelerated AI on Azure",
  description: "Article description:",
  description_text:
    "NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.",
  button: "Read",
  current_lang: "EN",
};
let UA = {
  title: "НОВИНИ NVIDIA",
  title_description: "Прискорений штучний інтелект NVIDIA в Azure",
  description: "Опис статті:",
  description_text:
    "NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.",
  button: "Читати",
  current_lang: "UA",
};

let langBtns;
class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: EN,
    };
  }

  componentDidMount() {
    langBtns = document.querySelectorAll(".lang-btn");
    langBtns[1].classList.add("active");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.lang !== this.state.lang) {
      langBtns.forEach((btn) => btn.classList.remove("active"));
      this.state.lang.current_lang === "UA"
        ? langBtns[0].classList.add("active")
        : langBtns[1].classList.add("active");
    }
  }

  SetLangEN() {
    this.setState({ lang: EN });
  }

  SetLangUA() {
    this.setState({ lang: UA });
  }

  render() {
    return (
      <div className="wrapper">
        <LangContext.Provider value={this.state.lang}>
          <h1 className="title" lang={this.props.current_lang}>
            {this.state.lang.title}
          </h1>
          <Article>
            <div className="article__title">
              <h2 lang={this.props.current_lang}>
                {this.state.lang.title_description}
              </h2>
            </div>
          </Article>
          <div className="lang">
            <button onClick={this.SetLangUA.bind(this)} className="lang-btn">
              UA
            </button>
            <button onClick={this.SetLangEN.bind(this)} className="lang-btn">
              EN
            </button>
          </div>
        </LangContext.Provider>
      </div>
    );
  }
}

export default App;
