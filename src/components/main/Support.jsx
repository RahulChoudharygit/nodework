import React from 'react'
import "./Support.css"

const Support = () => {
    return (
        <div id="support">
            <div className="container">
            <hr />
            <div className="form_box-support">
                <div className="support-form">
                    <form>
                        <div className="support-Form_container">

                            <h3>E-mail: <a href="mailto:imonas@gmail.com">imonas@gmail.com</a> <a href="mailto:imonas@gmail.com">Email Now</a></h3>
                            <h3>Telephone : <a href="tel:0141-224353">+0141-224353</a> <a href="tel:0141-224353">TelePhone Now</a></h3>
                            <h3>Facebook : <a href="/facebook.com">imonas</a></h3>

                            <br />
                            <p>
                                <h3 className='Address'>Address:</h3>
                                123 Fake Street, Faketown, FK1 2AB
                            </p>

                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>    
    )
}

export default Support
