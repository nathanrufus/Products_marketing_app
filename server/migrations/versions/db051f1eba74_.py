"""empty message

Revision ID: db051f1eba74
Revises: 5754961b2c61
Create Date: 2024-04-27 20:12:48.573183

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'db051f1eba74'
down_revision = '5754961b2c61'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('animals', schema=None) as batch_op:
        batch_op.add_column(sa.Column('animal_photo', sa.LargeBinary(), nullable=True))
        batch_op.drop_constraint('fk_animals_user_id_users', type_='foreignkey')
        batch_op.create_foreign_key(batch_op.f('fk_animals_user_id_users'), 'users', ['user_id'], ['user_id'])

    with op.batch_alter_table('crops', schema=None) as batch_op:
        batch_op.drop_constraint('fk_crops_user_id_users', type_='foreignkey')
        batch_op.create_foreign_key(batch_op.f('fk_crops_user_id_users'), 'users', ['user_id'], ['user_id'])

    with op.batch_alter_table('fruits', schema=None) as batch_op:
        batch_op.drop_constraint('fk_fruits_user_id_users', type_='foreignkey')
        batch_op.create_foreign_key(batch_op.f('fk_fruits_user_id_users'), 'users', ['user_id'], ['user_id'])

    with op.batch_alter_table('profiles', schema=None) as batch_op:
        batch_op.drop_constraint('fk_profiles_user_id_users', type_='foreignkey')
        batch_op.create_foreign_key(batch_op.f('fk_profiles_user_id_users'), 'users', ['user_id'], ['user_id'])

    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.Integer(), nullable=False))
        batch_op.drop_column('id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('id', sa.INTEGER(), nullable=False))
        batch_op.drop_column('user_id')

    with op.batch_alter_table('profiles', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_profiles_user_id_users'), type_='foreignkey')
        batch_op.create_foreign_key('fk_profiles_user_id_users', 'users', ['user_id'], ['id'])

    with op.batch_alter_table('fruits', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_fruits_user_id_users'), type_='foreignkey')
        batch_op.create_foreign_key('fk_fruits_user_id_users', 'users', ['user_id'], ['id'])

    with op.batch_alter_table('crops', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_crops_user_id_users'), type_='foreignkey')
        batch_op.create_foreign_key('fk_crops_user_id_users', 'users', ['user_id'], ['id'])

    with op.batch_alter_table('animals', schema=None) as batch_op:
        batch_op.drop_constraint(batch_op.f('fk_animals_user_id_users'), type_='foreignkey')
        batch_op.create_foreign_key('fk_animals_user_id_users', 'users', ['user_id'], ['id'])
        batch_op.drop_column('animal_photo')

    # ### end Alembic commands ###
