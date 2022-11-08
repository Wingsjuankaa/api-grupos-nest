import { MigrationInterface, QueryRunner } from "typeorm";

export class init1667849483381 implements MigrationInterface {
    name = 'init1667849483381'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "equipos" ("id" SERIAL NOT NULL, "nombre" character varying(255) NOT NULL, "estado" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_49ba93a8a121dfcf7cb6f98992e" UNIQUE ("nombre"), CONSTRAINT "PK_451fffd8d175b5b7aadbf5ba760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "equipos"`);
    }

}
