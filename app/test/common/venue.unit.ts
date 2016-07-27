/**
 * Created by jnevins on 7/27/16.
 */
import {Venue} from '../../common/venue';
import {IOwnership, IVenue, ISuggestCriteria} from "../../common/interfaces";
import {Ownership} from "../../common/ownership";

describe('venue tests', () => {

    it('should instantiate a venue object', () => {
        let venue : Venue = new Venue();

        expect(venue).toBeDefined();
    });

    it('should initialize with an empty ownership that contains the userId', () => {
        let venue : Venue = new Venue('12345');

        expect(venue.ownerships[0].foreignId).toBe('12345');
    });

    it('should extend a venue instance from an existing object', () => {
        let venue : IVenue = new Venue();
        let extendedFrom : IVenue = <IVenue>{
            _id: 'jkygasd7f6',
            ownerships: <IOwnership[]>[
                {
                    foreignId: '12345',
                    criteria: []
                }
            ],
            venueName: 'fantastic venue',
            address: '123 Street St',
            city: 'Denver',
            state: 'CO',
            zip: '80211',
            capacity: 'eleventy'
        };

        venue.extendFromObject(extendedFrom);

        expect(venue._id).toEqual(extendedFrom._id);
        expect(venue.ownerships.length).toEqual(extendedFrom.ownerships.length);
        expect(venue.venueName).toEqual(extendedFrom.venueName);
        expect(venue.address).toEqual(extendedFrom.address);
        expect(venue.city).toEqual(extendedFrom.city);
        expect(venue.state).toEqual(extendedFrom.state);
        expect(venue.zip).toEqual(extendedFrom.zip);
        expect(venue.capacity).toEqual(extendedFrom.capacity);
        expect(venue.getOwnership).toBeDefined();
    });

    it('should return an ownership for a particular userId', () => {
        let venue : Venue = new Venue('12345');
        let expectedOwnership : IOwnership = new Ownership('67890', []);

        venue.ownerships.push(expectedOwnership);

        expect(venue.getOwnership('67890')).toEqual([expectedOwnership]);
    });
});