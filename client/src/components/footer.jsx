import "./footer.css"

export default function Footer() {
    return (
        <>
            <footer className="footer">

                <div class="grid-container">
                    <div class="grid-item" style={{ borderRadius: "10px 0px 0px 10px" }}>#</div>
                    <div class="grid-item">0004 <br /> Bar </div>
                    <div class="grid-item">1 <br /> Beat </div>
                    <div class="grid-item">- 120 + <br /> Tempo</div>
                    <div class="grid-item" style={{ borderRadius: "0px 10px 10px 0px" }}> 4/4 <br /> Cmaj</div>
                </div>

                <div className="maincircle">
                    <div className="outercircle">
                        <div className="redcircle">  </div>
                    </div>
                </div>

                <div className="mainendjam">
                    <div className="endjam"> End Jam </div>
                    <div className="endjam1">1</div>
                    <div className="endjam1">2</div>
                    <div className="endjam1">3</div>
                    <div className="endjam1">4</div>
                </div>




            </footer>
        </>
    )
}