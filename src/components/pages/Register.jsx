import InputLogin from '../Form/InputForm'
import Footer from '../layouts/Footer'

const Register = () => {
    return (
        <>
            <div className="flex flex-col mx-auto max-w-[100%]">
                <InputLogin button={'Masuk'} showForgot={false} text={'Sudah punya akun ? '} textLink={'Login'} link={'/login'}/>
                <Footer/>
            </div>
        </>
    )
}

export default Register
