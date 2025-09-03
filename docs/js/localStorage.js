
const addProfile = (dados) => {
    const profile = {
        nome: "",
        sobrenome: "",
        email:"",
        senha: "",
        peso: "",
        altura: "",
        idade: "",
        contatoEmergencia: {
            nome: "",
            parentesco: "",
            telefone: "",
            email: ""
        },
        medicoes: [],
        medicamentos: [],
        consultas: [],
        notificacoes: {
            medicacoes: true,
            consultas: true,
            newsletter: true
        }
    }
    let profileString;
    if(dados === null) {
        profileString = JSON.stringify(profile);
    } else {
        profileString = JSON.stringify(dados);
    }
    localStorage.setItem("profile", profileString);
}

const readProfile = () => {
    const profile = localStorage.getItem("profile");
    if(profile) {
        const data = JSON.parse(profile);
        return data;
    } else {
        console.log("No user profile");
        return null;
    }
}

const updateProfile = (updatedProfile) => {
    const existingProfile = readProfile();
    if(existingProfile) {
        const newProfile = {...existingProfile, ...updatedProfile};
        addProfile(newProfile);
    } else {
        console.log('No existing profile to update');
    }
}

const isNewUser = () => {
    let profile = readProfile();
    if(profile == null) {
        return true;
    } else {
        return false;
    }
}


