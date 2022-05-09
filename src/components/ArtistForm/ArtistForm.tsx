import React from 'react'; 
import { useDispatch, useSelector, useStore } from 'react-redux'; 
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseFirstName,
    chooseLastName,
    chooseNationality,
    choosePeriod,
    chooseStyle,
    chooseWork,
    chooseScandals,
   } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface ArtistFormProps{
    id?: string;
    data?: {};
}

interface ArtistState{
    first_name: string;
    last_name: string;
    nationality: string;
    art_period: string;
    style: string;
    most_famous_work: string;
    scandals: string;

}

export const ArtistForm = (props:ArtistFormProps) => {
    const dispatch = useDispatch();
    let {artistData, getData} = useGetData();
    const store = useStore();

    const firstName = useSelector<ArtistState>(state => state.first_name)
    const lastName = useSelector<ArtistState>(state => state.last_name)

    const { register, handleSubmit } = useForm({})

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if(props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated: ${data.name} \n ID: ${props.id}`)
            window.location.reload();
            event.target.reset()
        } else{
            dispatch(chooseFirstName(data.first_name))
            dispatch(chooseLastName(data.last_name))
            dispatch(chooseNationality(data.nationality))
            dispatch(choosePeriod(data.art_period))
            dispatch(chooseStyle(data.style))
            dispatch(chooseWork(data.most_famous_work))
            dispatch(chooseScandals(data.scandals))

            await serverCalls.create(store.getState());
            window.location.reload();
            event.target.reset();
        }
    }
    
    return(
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="first_name"> First Name</label>
                    <Input {...register('first_name')} name='first_name' placeholder='First Name' />
                </div>
                <div>
                    <label htmlFor="last_name">Last Name</label>
                    <Input {...register('last_name')} name="last_name" placeholder="Last Name"/>
                </div>
                <div>
                    <label htmlFor="nationality">Nationality</label>
                    <Input {...register('nationality')} name="nationality" placeholder="Nationality"/>
                </div>
                <div>
                    <label htmlFor="art_period">Art Period</label>
                    <Input {...register('art_period')} name="art_period" placeholder="Art Period"/>
                </div>
                <div>
                    <label htmlFor="style">Style</label>
                    <Input {...register('style')} name="style" placeholder="Style"/>
                </div>
                <div>
                    <label htmlFor="most_famous_work">Most Famous Work</label>
                    <Input {...register('most_famous_work')} name="most_famous_work" placeholder="Most Famous Work"/>
                </div>
                <div>
                    <label htmlFor="scandals">Scandals</label>
                    <Input {...register('scandals')} name="scandals" placeholder="Scandals"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
