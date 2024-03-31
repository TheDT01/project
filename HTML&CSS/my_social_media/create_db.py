from app import app, db

# Function to create tables
def create_tables():
    with app.app_context():
        db.create_all()

# Call the function to create tables
if __name__ == "__main__":
    create_tables()
