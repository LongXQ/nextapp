

export default function direction() {
    return (
        <div className="handle book-direction">
            <div className="book-handle">
                <div className="step-btn step-btn--prev">
                    {/* <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/87ad47e35a060899d2234a8b5e7f378f.svg"/> */}
                    目录
                </div> 
                <div className="step-btn step-btn--next">
                    <img data-v-cdd03ee4="" src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/54d8a353dfbeff543c8a513821df8caf.svg"/>
                </div>
            </div>


            <style jsx>{`
                .book-handle {
                    position: fixed;
                    width: 100%;
                    left: 50%;
                    max-width: calc(100vw - 340px);
                    bottom: 70px;
                    transform: translateX(-50%);
                    display: flex;
                    justify-content: center;
                    margin-left: 160px;
                    transition: all .3s;
                }

                @media (max-width: 700px) {
                    .book-handle {
                        max-width: 100%;
                        bottom: 30px;
                        margin-left: 0;
                    }
                }

                .book-handle .step-btn {
                    cursor: pointer;
                    position: absolute;
                    bottom: 0;
                    z-index: 10;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 14px;
                    border-radius: 50%;
                    background-color: #007fff;
                    color: #fff;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    box-shadow: 0 4px 10px rgb(0 0 0 / 15%);
                }

                .book-handle .step-btn.step-btn--prev {
                    left: 10px;
                }

                .book-handle .step-btn img {
                    width: 32px;
                }

                @media (max-width: 700px) {
                    .book-handle .step-btn.step-btn--next {
                        right: 10px;
                    }
                }
            `}</style>
        </div>
    )
}