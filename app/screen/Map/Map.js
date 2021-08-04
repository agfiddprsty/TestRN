import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import styles from './Map.styles';
import Loading from '../../components/elements/Loading/Loading';
import AddButton from '../../components/elements/AddButton/AddButton';

const Map = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.02,
    longitudeDelta: 0.04,
  });
  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    setLoading(true);
    Geolocation.getCurrentPosition(async position => {
      const initialPosition = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.04,
      };
      setLoading(false);
      return await setRegion(initialPosition);
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.map}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={region}
            region={region}
            showsUserLocation={true}
          />
        </View>
      )}
      <AddButton
        textRight={`latitude: ${region.latitude}\nlongitude: ${region.longitude}`}
      />
    </View>
  );
};

export default Map;
