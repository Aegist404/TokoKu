import InputLogin from '../Form/InputForm'
import Footer from '../layouts/Footer'

const Login = () => {
    return (
        <>
            <div className="flex flex-col mx-auto max-w-[100%]">
                <InputLogin button={'Masuk'} showForgot={true} text={'Belum punya akun ? '} textLink={'Daftar'} link={'/'}/>
                <Footer/>
            </div>
        </>
    )
}

export default Login
