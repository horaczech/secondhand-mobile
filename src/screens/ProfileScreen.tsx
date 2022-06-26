import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {StoreProps} from '../ts/interfaces';
import Text from '../components/ui/Text';
import {RouteProp} from '@react-navigation/native';
import {MainStackParamList} from '../ts/types';
import {AppDispatch} from '../app/store';
import {setActiveProfile} from '../app/profilesSlice';
import Layout from '../components/Layout';

interface Props {
    route: RouteProp<MainStackParamList, 'ProfileScreen'>;
}

const ProfileScreen: React.FC<Props> = ({route}) => {
    const {activeProfile} = useSelector((state: StoreProps) => state.profiles);
    const {userId} = route.params;

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (!activeProfile || activeProfile.id !== userId) {
            dispatch(setActiveProfile({id: userId, name: 'Henry', image: 'https://picsum.photos/536/354'}));
        }
    }, [activeProfile]);

    return (
        <Layout>
            <View>
                {activeProfile ? (
                    <>
                        <Image source={{uri: activeProfile.image}} style={styles.image} />
                        <Text>{activeProfile.name}</Text>
                    </>
                ) : null}
            </View>
        </Layout>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
    },
});
