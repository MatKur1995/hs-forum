import "./GameServerList.css";


export const GameServerList = () => {
    return (
        <div className="servers-container">
            <div className="test-container">
                <div className="servers-status">
                    <div className="server">
                        <div>
                            <p className="server-status-title">Head-Shot.pl [ZOMBIE ESCAPE]</p>
                            <div>
                                <img src="../../../public/assets/img/ip.png" alt=""/>
                                    <p className="servers-p">178.19.106.68:27089</p>
                            </div>
                        </div>
                        <div className="desktop-status">
                            <img src="../../../assets/img/sloty.png" alt=""/>
                                <p className="status servers-p">18/20</p>
                        </div>
                        <div className="right-side">
                            <div className="map-status">
                                <p className="servers-p">zm_army</p>
                                <img className="servers-map" src="../../../assets/img/zm_army.jpg" alt=""/>
                            </div>
                            <div className="mobile-status">
                                <img src="../../../assets/img/sloty.png" alt=""/>
                                    <p className="status servers-p">18/20</p>
                            </div>
                        </div>
                    </div>
                    <div className="server">
                        <div>
                            <p className="server-status-title">Head-Shot.pl [DE_WESTWOOD]</p>
                            <div>
                                <img src="../../../assets/img/ip.png" alt=""/>
                                    <p className="servers-p">178.19.106.68:27089</p>
                            </div>
                        </div>
                        <div className="desktop-status">
                            <img src="../../../assets/img/sloty.png" alt=""/>
                                <p className="status servers-p">18/20</p>
                        </div>
                        <div className="right-side">
                            <div className="map-status">
                                <p className="servers-p">de_westwood</p>
                                <img className="servers-map" src="../../../assets/img/de_westwood.jpg" alt=""/>
                            </div>
                            <div className="mobile-status">
                                <img src="../../../assets/img/sloty.png" alt=""/>
                                    <p className="status servers-p">18/20</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pc-img-container">
                    <img className="pc-img" src="../../../assets/img/pc.png" alt=""/>
                </div>
            </div>
        </div>
)
};