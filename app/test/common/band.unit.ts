/**
 * Created by jnevins on 7/27/16.
 */
import {Band} from '../../common/band';


describe('band unit tests', () => {
    it('should successfully instantiate a new band', () => {
        let band : Band = new Band('12345');

        expect(band).toBeDefined();
    });

    it('should initialize with an empty ownership that contains the userId', () => {
        let band : Band = new Band('12345');

        expect(band.ownerships[0].foreignId).toBe('12345');
    });
});