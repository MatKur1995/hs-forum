import "./ForumStats.css";


export const ForumStats = () => {
    return (<div className="forum-stats">
        <div className="left-panel-stats">
            <div className="left-panel-title">
                <img src="../../../../assets/img/clock-icon.png" alt=""/>
                    <p>OGÓLNE STATYSTIKA HEAD-SHOT.PL</p>
            </div>
            <div className="user-stats-activity">
                <p>Na forum jest <span className="span-users">23</span> użytkowników - <span className="span-users">14</span> zarejestrowanych i <span className="span-users">8</span> gości.</p>
                <p>Mamy <span className="span-users">17,324</span> zarejestrowanych  użytkowników.</p>
                <p>Forum istnieje już <span className="span-users">1391</span> dni. Odwiedzono je <span className="span-users">1,634,214</span> razy.</p>
            </div>
        </div>
        <div className="right-panel-stats">
            <div className="left-panel-title">
                <img src="../../../../assets/img/user-icon.png" alt=""/>
                    <p>OBECNOŚĆ UŻYTKOWNIKÓW NA FORUM</p>
            </div>
            <div className="users-online">
                <div className="registered-users-container">
                    <p className="registered-users">Zarejestrowani użytkownicy:</p>
                    <div>
                        <p>Admin</p>
                        <p>User</p>
                        <p>User1</p>
                        <p>User2</p>
                        <p>User3</p>
                        <p>User4</p>
                        <p>User5</p>
                    </div>
                </div>
                <div className="logged-users-container">
                    <p className="logged-today">Zalogowani dzisiaj:</p>
                    <div>
                        <p>Admin</p>
                        <p>User</p>
                        <p>User1</p>
                        <p>User1</p>
                        <p>User2</p>
                        <p>User3</p>
                        <p>User4</p>
                        <p>User5</p>
                        <p>User1</p>
                        <p>User2</p>
                        <p>User3</p>
                        <p>User4</p>
                        <p>User5</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
};