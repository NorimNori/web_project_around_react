import profile from "../../assets/images/Cindy-Campbell.jpeg";

export default function Main() {
  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__image-container">
          <img
            className="profile__image"
            src={profile}
            alt="Imágen de perfil"
          />
          <div className="profile__image-edit"></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">Cindy Campbell</h1>
          <button className="profile__edit-button" type="button"></button>
          <p className="profile__description">Reportera</p>
        </div>
        <button className="profile__add-button" type="button"></button>
      </section>
    </main>
  );
}
