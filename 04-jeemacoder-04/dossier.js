
class Jeemacoder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prenomInput: "",
            nomInput: "",
            emailinput: "",
            telephoneInput: "",
            coders:[],
            ModiferIndex : null,
        };
        this.handleClick = this.handleClick.bind(this)
    }
  
    handleClick(){
        const newCoder={
            prenom:this.state.prenomInput,
            nom:this.state.nomInput,
            email:this.state.emailinput,
            telephone:this.state.telephoneInput
        }
        
        this.setState({coders:[ newCoder,...this.state.coders]})
      
        this.setState({
            prenomInput: "",
            nomInput: "",
            emailinput: "",
            telephoneInput: "",
    })
    }
    handleEdit(index) {
        const coder = this.state.coders[index]
        this.setState({
          prenomInput: coder.prenom,
          nomInput: coder.nom,
          emailInput: coder.email,
          telephoneInput: coder.telephone,
          })}
    
    render() {
        return (
           <div className="py-4">
             <p className="text-center">Jeemacoder GESTION UTILISATEUR</p>
           
            <div className="container col-lg-6 m-auto col-12">
        
            <div className=" ">
                    <div className="row">
                        <div className="col-6 py-2">
                            <label className="form-label">Prenom</label>
                            <input type="text"
                                value={this.state.prenomInput}
                                // pour changer la valeur
                                onChange={(e) => {
                                    this.setState({
                                        prenomInput: e.target.value
                                    });
                                }}
                                className="form-control" // Corrigé ici
                            />
                        </div>
                        <div className="col-6 py-2">
                            <label className="form-label">Nom</label>
                            <input type="text"
                                value={this.state.nomInput}
                                onChange={(e) => {
                                    this.setState({
                                        nomInput: e.target.value
                                    });
                                }}
                                className="form-control" // Corrigé ici
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 py-2">
                            <label className="form-label">Telephone</label>
                            <input type="text"
                                value={this.state.telephoneInput}
                                onChange={(e) => {
                                    this.setState({
                                        telephoneInput: e.target.value
                                    });
                                }}
                                className="form-control"
                            />
                        </div>
                        <div className="col-6 py-2">
                            <label className="form-label">Email</label>
                            <input type="text"
                                value={this.state.emailinput}
                                onChange={(e) => {
                                    this.setState({
                                        emailinput: e.target.value
                                    });
                                }}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <button 
                    // pour gerer l'evenement clique
                    onClick={this.handleClick}
                        className="btn btn-success w-100">submit</button>
                </div>
         

            </div>
            <div className="mt-5">
                <h3 className="text-center">Coders</h3>
                <table className="table">
  <thead>
    <tr>
      <th scope="col">Prenom</th>
      <th scope="col">Nom</th>
      <th scope="col">Email</th>
      <th scope="col">Telephone</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {
    this.state.coders.map((coders , index)=>{
        return     <tr>
      <td>{coders.prenom}</td>
      <td>{coders.nom}</td>
      <td>{coders.email}</td>
      <td>{coders.telephone}</td>
      <td><button className= " btn btn-warning" 
                      onClick={ () => this.handleEdit(index )}
                      >
                      Modifier
                      </button></td>
    </tr>
    })
  }


  </tbody>
</table>
            </div>
            </div>
        );
    }
}

const not=ReactDOM.createRoot(document.getElementById("not"));
not.render(<Jeemacoder/>)