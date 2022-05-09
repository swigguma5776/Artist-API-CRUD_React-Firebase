import React from 'react';
import { styled } from '@mui/material';
import { Button, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthCheck, useSigninCheck } from 'reactfire'; 
import { getAuth } from 'firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import artist_image from '../../assets/images/monet_image.jpg'; 

interface Props{
    title:string;
}

const Root = styled('div')({
    padding: 0,
    margin: 0
})

const NavBarContainer = styled('div')({
    backgroundColor: '#CC7818',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})

const LogoA = styled(Link)({
    color: 'white',
    listStyle: 'none',
    textTransform: 'none',
    textDecoration: 'none'
})

const LogoNavigation = styled('ul')({
    listStyle: 'none',
    textTransform: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'white'
})

const Main = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${artist_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
})
const MainText = styled('div')({
    fontSize: '26px',
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
})

const SignInText = () => {
    const auth = getAuth(); 
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth); 
    // const {status, data:signInCheckResult} = useSigninCheck(); 

    if (loading){
        return <CircularProgress />
    } 
    if (user){
        return <NavA to='/signin'>Sign Out</NavA>
    } else {
        return <NavA to='/signin'>Sign In</NavA>
    }
}

export const Home = ( props: Props) => {
    return (
        <Root>
            <NavBarContainer>
                <Logo>
                    <LogoA to='/'>Artist Inventory</LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to='/'>Home</NavA>
                    </li>
                    <li>
                        <NavA to='/dashboard'>Dashboard</NavA>
                    </li>
                    <li>
                        <NavA to='/signin'>Sign In</NavA>
                    </li>
                </LogoNavigation>
            </NavBarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p>All Your Favorite Artists in One Place!</p>
                    <br></br>
                    <Button color='primary' variant='contained' component={Link} to='/dashboard'>See Your Artists</Button>
                </MainText>
            </Main>
        </Root>
    )
}