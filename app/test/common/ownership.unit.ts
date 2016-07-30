import {Ownership} from "../../common/ownership";
import {Criteria} from "../../common/constants";
import {Genre} from "../../common/constants";
import {ISuggestCriteria} from "../../common/interfaces";

describe('ownership tests', () => {

    it('should instantiate an ownership object', () => {
        let ownership : Ownership = new Ownership('123', []);

        expect(ownership).toBeDefined();
    });

    it('should return true if a criterion exists', () => {
        let ownership : Ownership =
            new Ownership(
                '123',
                [
                    {
                        key: Criteria.GENRE,
                        value: 'blah'
                    }
                ]
            );

        let result : boolean =  ownership.hasCriteria(Criteria.GENRE);

        expect(result).toBeTruthy();
    });

    it('should return false if a criterion does not exists', () => {
        let ownership : Ownership =
            new Ownership(
                '123',
                [
                    {
                        key: Criteria.GENRE,
                        value: 'blah'
                    }
                ]
            );

        let result : boolean =  ownership.hasCriteria(<any>'blah');

        expect(result).toBeFalsy();
    });

    it('should return the requested criteria', () => {
        let expectedCriteria : ISuggestCriteria = {
            key: Criteria.GENRE,
            value: 'blah'
        };

        let ownership : Ownership =
            new Ownership(
                '123',
                [
                    expectedCriteria
                ]
            );

        let result : string =  ownership.getCriteria(Criteria.GENRE);

        expect(result).toBe(expectedCriteria.value);
    });

    it('should update criteria', () => {
        let ownership : Ownership =
            new Ownership(
                '123',
                [
                    {
                        key: Criteria.GENRE,
                        value: 'blah'
                    }
                ]
            );

        ownership.updateCriteria(Criteria.GENRE, 'blah');

        expect(ownership.getCriteria(Criteria.GENRE)).toBe('blah');
    });

    it('should add criteria', () => {
        let expectedCriteria : ISuggestCriteria[] = [
            {
                key: Criteria.GENRE,
                value: 'banana'
            },
            {
                key: Criteria.GENRE,
                value: 'monkey'
            }
        ];

        let ownership : Ownership =
            new Ownership(
                '123',
                [
                    expectedCriteria[0]
                ]
            );

        ownership.addCriteria(expectedCriteria[1].key, expectedCriteria[1].value);

        expect(ownership.criteria).toEqual(expectedCriteria);
    });
});