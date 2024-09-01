

class Maaycooder extends React.Component{
    constructor(props){
        super(props);
        this.state={
            prenomInput:"",
            nomInput:"",
            telephoneInput:"",
            emailInput:"",
            Coders:[]
        }
        this.hundleClick = this.hundleClick.bind(this);
    }

    hundleClick(){
        const newCoder={
            prenom:this.state.prenomInput,
            nom:this.state.nomInput,
            telephone:this.state.telephoneInput,
            email:this.state.emailInput,
        };
        this.setState({
           Coders:[newCoder,...this.state.Coders] ,
           prenomInput: "",
           nomInput: "",
           emailInput: "",
           telephoneInput: ""
        }
        )
    }

    render(){
        return(
            <div className="py-4">
                <p className="text-center"><b>Maaycooder Gestion d'utilisateur</b></p>
                <div className="container col-lg-6 m-auto col-12">
                    <div>
                        <div className="row">
                            <div className="col-6 py-2">
                                <label className="form-label">Prenom</label>
                                <input 
                                    type="texte"
                                    value={this.state.prenomInput}
                                    onChange={(e)=>{
                                        this.setState({prenomInput:e.target.value})
                                    }}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-6 py-2">
                                <label className="form-label">Nom</label>
                                <input 
                                    type="texte"
                                    value={this.state.nomInput}
                                    onChange={(e)=>{
                                        this.setState({nomInput:e.target.value})
                                    }}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-6 py-2">
                                <label className="form-label">Telephone</label>
                                <input 
                                    type="texte"
                                    value={this.state.telephoneInput}
                                    onChange={(e)=>{
                                        this.setState({telephoneInput:e.target.value})
                                    }}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-6 py-2">
                                <label className="form-label">Email</label>
                                <input 
                                    type="texte"
                                    value={this.state.emailInput}
                                    onChange={(e)=>{
                                        this.setState({emailInput:e.target.value})
                                    }}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <button
                        onClick={this.hundleClick}
                        className="btn btn-success w-100"
                        >Submit</button>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-center"><b>Les Coders</b></h3>
                    <table className="table">
                       <thead>
                        <tr>
                        <th scope="col">Prenom</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telephone</th>
                        </tr>
                       </thead> 
                       <tbody>
                       {
                                this.state.Coders.map((coder, index) => (
                                    <tr key={index}>
                                        <td>{coder.prenom}</td>
                                        <td>{coder.nom}</td>
                                        <td>{coder.email}</td>
                                        <td>{coder.telephone}</td>
                                    </tr>
                                ))
                            }
                       </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Maaycooder/>)