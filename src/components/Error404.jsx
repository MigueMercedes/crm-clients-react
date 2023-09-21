import { useNavigate, useRouteError } from 'react-router-dom'

function Error404() {
	const error = useRouteError()
  const navigate = useNavigate()

	return (
		<div className="space-y-8">
			<h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">
				CRM - Clientes
			</h1>
			{error ? (
				<p className="text-center text-red-700">
					{error.statusText || error.message}
				</p>
			) : (
				<p className="text-center text-red-700">Parece que hubo un error</p>
			)}
			<div className='flex justify-center'>
				<button
					type="button"
					className="w-1/2 bg-blue-700 text-white px-5 py-2 font-bold uppercase rounded"
					onClick={() => navigate('/')}
				>
					Volver
				</button>
			</div>
		</div>
	)
}

export default Error404
