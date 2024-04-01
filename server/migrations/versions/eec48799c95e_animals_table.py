"""Animals table

Revision ID: eec48799c95e
Revises: 80f9170e3eaa
Create Date: 2024-04-01 20:04:41.417703

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'eec48799c95e'
down_revision = '80f9170e3eaa'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('animals',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.Column('descripton', sa.Text(length=500), nullable=True),
    sa.Column('user_email', sa.String(length=100), nullable=True),
    sa.Column('number', sa.Integer(), nullable=True),
    sa.Column('price', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_email'], ['users.email'], ),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('user_id', sa.Integer(), nullable=False))
        batch_op.alter_column('name',
               existing_type=sa.INTEGER(),
               type_=sa.String(length=100),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('name',
               existing_type=sa.String(length=100),
               type_=sa.INTEGER(),
               nullable=False)
        batch_op.drop_column('user_id')

    op.drop_table('animals')
    # ### end Alembic commands ###
