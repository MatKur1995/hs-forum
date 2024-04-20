import "./PostView.css";
import {TextEditor} from "./TextEditor/TextEditor";


export const PostView = () => {
    return (
        <div>
            <div className="post-content">
                <div className="post-author">
                    <img src="../../../assets/img/b599127509772f2125568318a38f24e64881de61_full.jpg" alt=""
                         className="author-avatar"/>
                        <div>
                            <p className="user-authorname">Admin</p>
                            <p className="author-rank">Lider</p>
                            <p className="author-posts">Posty: <span>4,213</span></p>
                            <p className="author-rep">Reputacja: <span>9,213</span></p>
                        </div>
                </div>
                <div className="post-content-desc">
                    <p className="post-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aperiam
                        beatae
                        commodi, cupiditate ducimus eius eos eveniet ex ipsam iure laudantium molestias nam nisi nulla
                        odio
                        odit porro quibusdam quisquam quod recusandae sit soluta tempore? Alias assumenda blanditiis
                        dolor
                        exercitationem explicabo, in non placeat repellat ut vero voluptas voluptatibus?</p>
                    <p className="post-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aperiam
                        beatae
                        commodi, cupiditate ducimus eius eos eveniet ex ipsam iure laudantium molestias nam nisi nulla
                        odio
                        odit porro quibusdam quisquam quod recusandae sit soluta tempore? Alias assumenda blanditiis
                        dolor
                        exercitationem explicabo, in non placeat repellat ut vero voluptas voluptatibus?</p>
                </div>
            </div>
            <div>
                <div className="post-answers">
                    <div className="post-author">
                        <img src="../../../assets/img/b599127509772f2125568318a38f24e64881de61_full.jpg" alt=""
                             className="author-avatar"/>
                            <div>
                                <p className="user-authorname">Admin</p>
                                <p className="author-rank">Lider</p>
                                <p className="author-posts">Posty: <span>4,213</span></p>
                                <p className="author-rep">Reputacja: <span>9,213</span></p>
                            </div>
                    </div>
                    <div className="post-content-desc">
                        <p className="post-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aperiam
                            beatae
                            commodi, cupiditate ducimus eius eos eveniet ex ipsam iure laudantium molestias nam nisi
                            nulla odio
                            odit porro quibusdam quisquam quod recusandae sit soluta tempore? Alias assumenda blanditiis
                            dolor
                            exercitationem explicabo, in non placeat repellat ut vero voluptas voluptatibus?</p>
                        <p className="post-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aperiam
                            beatae
                            commodi, cupiditate ducimus eius eos eveniet ex ipsam iure laudantium molestias nam nisi
                            nulla odio
                            odit porro quibusdam quisquam quod recusandae sit soluta tempore? Alias assumenda blanditiis
                            dolor
                            exercitationem explicabo, in non placeat repellat ut vero voluptas voluptatibus?</p>
                    </div>
                </div>
                <div className="post-answers">
                    <div className="post-author">
                        <img src="../../../assets/img/b599127509772f2125568318a38f24e64881de61_full.jpg" alt=""
                             className="author-avatar"/>
                            <div>
                                <p className="user-authorname">Admin</p>
                                <p className="author-rank">Lider</p>
                                <p className="author-posts">Posty: <span>4,213</span></p>
                                <p className="author-rep">Reputacja: <span>9,213</span></p>
                            </div>
                    </div>
                    <div className="post-content-desc">
                        <p className="post-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aperiam
                            beatae
                            commodi, cupiditate ducimus eius eos eveniet ex ipsam iure laudantium molestias nam nisi
                            nulla odio
                            odit porro quibusdam quisquam quod recusandae sit soluta tempore? Alias assumenda blanditiis
                            dolor
                            exercitationem explicabo, in non placeat repellat ut vero voluptas voluptatibus?</p>
                    </div>
                </div>
            </div>
            <TextEditor/>
        </div>
)
};