import img from "./assets/Illustration.png"

import "./About.css";


export const About = () => {
    return (
        <section className="block block-about">
            <div className="column column-first">
                <img className="illustration" src={img} alt="Illustration"/>
            </div>
            <div className="column column-second">
                <h2 className="title">What is&nbsp;
                    <span className="highlighter">
                        CTF
                    </span>
                    ?</h2>
                <p className="text">
                    Lorem ipsum dolor sit amet consectetur.
                    Sed non ut dui morbi feugiat quis elit.
                    Lorem proin phasellus consectetur mi fermentum congue.
                    Arcu molestie fermentum interdum massa nunc ut interdum viverra et.
                    Platea vitae purus nulla euismod.
                </p>
                <p className="text">
                    Vestibulum erat in adipiscing suscipit mauris elit malesuada.
                    Viverra mattis egestas dignissim habitasse faucibus semper eget.
                    Imperdiet eget id fames interdum.
                    In dictumst sit ultrices a non et.
                    Lacus porttitor orci tristique.
                </p>
            </div>
        </section>
    );
}
